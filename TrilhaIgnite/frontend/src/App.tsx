interface IButtonProps {
  title: string
}

function Button(props: IButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

export default function App() {
  return (
    <>
      <h1>Hello world</h1>

      <div style={{ display: 'flex', gap: 20 }}>
        <Button title="Send 1" />
        <Button title="Send 2" />
        <Button title="Send 3" />
      </div>
    </>
  )
}
