import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'

function App() {
  const dataServer123456 = [
    {
      label: 'Dataset 1',
      data: [12, 67, 98, 56, 34, 15, 100],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [34, 12, 67, 100, 98, 56, 15],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [55, 74, 1, 45, 15, 98, 56,],
      borderColor: 'yellow',
      backgroundColor: 'violet',
    },
  ]


  const dataServerBlack = [
    {
      label: 'Dataset 1',
      data: [12, 67, 98, 56, 34, 15, 100],
      borderColor: 'black',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

  ]


  const dataServerGreen = [
    {
      label: 'Dataset 1',
      data: [100, 12, 67, 98, 56, 34, 15],
      borderColor: 'green',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

  ]
  return (
    <div className="App">
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Chart dataServer={dataServer123456} />

        <Chart dataServer={dataServerBlack} />

        <Chart dataServer={dataServerGreen} />

      </div>
    </div>
  );
}

export default App;
