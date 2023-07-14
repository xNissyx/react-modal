import useModal from './hooks/useModal';
import './App.css';

function App() {
  const { Modal, openModal, closeModal, show } = useModal();
  return (
    <div style={{ margin: '2em' }}>
      <Modal show={show}>
        <div
          style={{
            backgroundColor: 'white',
            width: '300px',
            height: '200px',
            padding: '1em',
            borderRadius: '15px',
          }}
        >
          <h2>Content from Children</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
      <h1>React Hooksでモーダルウィンドウを作成</h1>
      <div>
        <button onClick={openModal}>Open</button>
      </div>

      <div style={{ height: '2000px', backgroundColor: '#ddd' }} id="main">
        メインコンテンツ
      </div>
    </div>
  );
}

export default App;