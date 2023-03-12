import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
