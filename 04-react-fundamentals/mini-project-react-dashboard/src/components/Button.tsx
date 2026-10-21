// 1. EVENT HANDLING & PROPS
export default function Button({ text, onClick }: { text: string, onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      {text}
    </button>
  );
}