import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "/my-resume/data.json";

const ResumeContext = createContext();

const initialState = {
  loading: true,
  error: "",
  projects: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "projects":
      return { ...state, loading: false, projects: action.payload };
    case "rejected":
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

function ResumeProvider({ children }) {
  const [{ loading, error, projects }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    async function fetchProjects() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(BASE_URL);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        dispatch({ type: "projects", payload: data.projects });
      } catch (error) {
        console.error("Fetch error:", error);
        dispatch({
          type: "rejected",
          payload: error.message || "Failed to fetch projects",
        });
      }
    }

    fetchProjects();
  }, []);

  return (
    <ResumeContext.Provider value={{ loading, error, projects }}>
      {children}
    </ResumeContext.Provider>
  );
}

function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined)
    throw new Error("ResumeContext is used outside the ResumeProvider");

  return context;
}

export { ResumeProvider, useResume };
