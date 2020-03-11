import { Route } from "react-router-dom";
import React from "react";

export function AppRoute({layout: Layout, component: Component, path}) {
    return (
        <Route path={path} render={(props) => {
            return (
                <Layout history={props.history}>
                    <Component history={props.history}/>
                </Layout>
            )
        }} />
    )
}
 