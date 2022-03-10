import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { getHTMLElement } from "@justfixnyc/util";
import { AuthContext, AuthProvider } from "./auth"
import {
  Widget,
  FullDocument,
  validateFieldName,
  validatePositiveInt,
  ConfigureWidget
} from "./dashboard";
import {
  VIEW_CONFIGURE_WIDGET,
  EVICTION_VIZ_DEFAULT_HEIGHT,
  VIEW_WIDGET,
  QS_VIEW,
  QS_FIELD_NAME,
  QS_HEIGHT,
  REACT_APP_PASSWORD
} from "./constants";

interface LocationState {
  from: {
    pathname: string;
  };
}

const useAuth = () => useContext(AuthContext)

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (auth.isAuthenticated !== REACT_APP_PASSWORD) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const LoginPage: React.FC<{}> = () => {
  let navigate = useNavigate();
  let location = useLocation();

  let auth = useAuth();
  let from = (location.state as LocationState)?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let password = formData.get("password") as string;

    auth.signin(password, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="container">
      <p>You must log in to view the dashboard</p>
      <form onSubmit={handleSubmit}>
        <label>
          Password: <input name="password" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const IndexPage: React.FC<{}> = () => {
  const search = new URLSearchParams(window.location.search);
  const view = search.get(QS_VIEW);
  return view === VIEW_WIDGET ? (
    <Widget
      fieldName={validateFieldName(search.get(QS_FIELD_NAME))}
      height={validatePositiveInt(
        search.get(QS_HEIGHT),
        EVICTION_VIZ_DEFAULT_HEIGHT
      )}
    />
  ) : view === VIEW_CONFIGURE_WIDGET ? (
    <ConfigureWidget />
  ) : (
    <RequireAuth>
      <FullDocument />
    </RequireAuth>
  );
};

const App: React.FC<{}> = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </AuthProvider>
  );
};

async function main() {
  ReactDOM.render(
    <BrowserRouter basename="rtc-eviction-viz">
      <App />
    </BrowserRouter>,
    getHTMLElement("div", "#app")
  );
}

main();
