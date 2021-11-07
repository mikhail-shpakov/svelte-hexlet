import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Example ToDo list'
	}
});

export default app;
