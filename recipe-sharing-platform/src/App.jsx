
import {BrowserRouter as Router,Router,Routes }from 'react-router-dom'
import HomePage from './components/HomePage';
import RecipeDetail from .'./components/RecipeDetail';


function(){
  return(
    <Router>
      <Routes>
        <Route path="/"element={<HomePage/>}/>
        <Route path="/"element={<RecipeDetail/>}/>

      </Routes>
    </Router>
  )
}

export default App;