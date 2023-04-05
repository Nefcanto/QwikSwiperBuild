import { component$ } from '@builder.io/qwik';
import {
    QwikCityProvider,
    RouterOutlet,
    ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './router-head';
import 'tailwindcss/tailwind.css'
import Header from './routes/header'

import './global.css';

export default component$(() => {

    const scriptContent = `const handlers = {}
    const app = {

        on: (name, fn) => {
            if (!handlers[name]) handlers[name] = [];
            handlers[name].push(fn);
        },
    
        trigger: (name, params) => {
            if (!handlers[name]) return false;
            handlers[name].forEach((fn) => fn.call(fn, params));
        },
    
        off: (name, fn) => {
            if (handlers[name]) {
                const index = handlers[name].indexOf(fn);
                if (index >= 0) handlers[name].splice(index, 1);
            }
        }
    }`

    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
                <RouterHead />
                <Header />
                <script dangerouslySetInnerHTML={scriptContent} />
            </head>
            <body lang="en">
                <RouterOutlet />
                <ServiceWorkerRegister />
            </body>
        </QwikCityProvider>
    );
});
