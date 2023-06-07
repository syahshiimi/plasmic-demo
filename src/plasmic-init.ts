import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from "./components/HelloWorld";
import { PageHeader } from "./components/PageHeader";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "j35V8LYzM1jxXSrVdyXMJ",  // ID of a project you are using
      token: "ayU1RtlR1BVfguGJwSXUXmayO1VIzBcmZJSnMSw8MTF7SavPSaUGXNMhpMwVy8ukPHo1wZtdH8owTupFHF9w"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});

PLASMIC.registerComponent(PageHeader, {
    name: 'PageHeader',
    props: {
        children: 'slot'
    }
})
