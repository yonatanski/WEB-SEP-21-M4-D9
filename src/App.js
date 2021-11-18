import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"
import fantasyBooks from "./fantasyBooks.json"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Registration from "./components/Registration"

function App() {
  return (
    <>
      {/* <BookList books={fantasyBooks} /> */}
      <Router>
        <div className="App">
          <header className="App-header">
            <Routes>
              {/* <WarningSign text="Watch out again!" /> */}
              {/* <MyBadge text="NEW!!" color="info" /> */}
              {/* <SingleBook book={fantasyBooks[0]} /> */}
              <Route
                path=""
                exact
                render={() => <BookList books={fantasyBooks} />}
              />
              <Route path="/registration" exact component={Registration} />
            </Routes>
          </header>
        </div>
      </Router>
    </>
  )
}

export default App
