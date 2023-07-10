import useModal from "./hooks/useModal";

function App() {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <div style={{ margin:'2rem' }}>
      <h1>React Hooksでモーダルウィンドウを作成</h1>
      <div>
        <button onClick={ openModal }>open</button>
      </div>
      <Modal>
        <div
          style={{
            backgroundColor: 'white',
            width: '500px',
            height: '200px',
            padding: '1em',
            borderRadius: '15px',
          }}
        >
          <h1>Content from Children</h1>
          <div>
            <button onClick={ closeModal }>close</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
