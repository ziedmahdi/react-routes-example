import { Route } from "react-router-dom";
import React from "react";

export function AppRoute({layout: Layout, component: Component, path}) {
    return (
        <Route path={path} render={() => {
            return (
                <Layout>
                    <Component />
                </Layout>
            )
        }} />
    )
}
 