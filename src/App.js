import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

      <header className='navbar navbar-expand-lg navbar-dark bg-dark'>

        <div className='container-fluid'>

          <a href='' className='navbar-brand'>Reactstrap</a>

          <button type='button' className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className='navbar-toggler-icon'></span>
          </button>

          <nav className='collapse navbar-collapse' id='navmenu'>

            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a href='#' className='nav-link'>Home</a>
              </li>

              <li className='nav-item'>
                <a href='#' className='nav-link'>Products</a>
              </li>

              <li className='nav-item'>
                <a href='#' className='nav-link'>Services</a>
              </li>

              <li className='nav-item'>
                <a href='#' className='nav-link'>About</a>
              </li>

              <li className='nav-item'>
                <a href='#' className='nav-link'>Contact</a>
              </li>
            </ul>
          </nav>

        </div>


      </header>

    </div>
  );
}

export default App;
