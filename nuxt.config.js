export default {
	modules: [
		[
			'nuxt-supabase',
			{
				supabaseUrl: process.env.SUPABASE_URL,
				supabaseKey: process.env.SUPABASE_KEY,
			},
		],
	],
	components: true,
	srcDir: 'src',
	target: 'static',
}
