export default function Unsuccess() {
  return (
    <div
      style={{
        fontSize: "18px",
        marginTop: "4rem",
      }}>
      <p style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontWeight: "600", fontSize: "22px", color: "#eb4e4e" }}>
          ⚠️ Sorry!
        </span>
        <span style={{ fontSize: "17px" }}>
          Failed to send message try again.
        </span>
      </p>
    </div>
  );
}
