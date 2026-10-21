// 2. PARENT TO CHILD (Props)
export default function Card({ title, body }: { title: string, body: string }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}