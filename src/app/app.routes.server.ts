import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'productdetails/:slug/:id',
    renderMode: RenderMode.Client  // Using client-side rendering for product details since it has parameters
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
