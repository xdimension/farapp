/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.css'
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import 'react-toastify/dist/ReactToastify.css'
import ToastProvider from '~/layouts/ToastProvider'
const appName = import.meta.env.VITE_APP_NAME?? ''

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => title? `${title} - ${appName}` : appName,

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    hydrateRoot(
      el,
      <ToastProvider>
        <App {...props} />
      </ToastProvider>
    )
  },
})
