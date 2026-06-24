type Props = {
  number: string;
  text: string;
};

export default function StatsCard({
  number,
  text,
}: Props) {
  return (
    <div
      style={{
        background: "#111",
        border: "1px solid #222",
        borderRadius: "16px",
        padding: "25px",
        minWidth: "180px",
      }}
    >
      <h2
        style={{
          color: "#a855f7",
          fontSize: "32px",
        }}
      >
        {number}
      </h2>

      <p>{text}</p>
    </div>
  );
}