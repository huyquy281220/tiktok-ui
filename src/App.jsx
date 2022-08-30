import { Fragment } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@/routes";
import { DefaultLayout } from "@/layouts";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        const Page = route.component;

                        if(route.layout){
                            Layout = route.layout;
                        }else if(route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
