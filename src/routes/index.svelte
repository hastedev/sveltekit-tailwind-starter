<script lang="ts">
    import GithubIcon from "$lib/components/icons/GithubIcon.svelte"
</script>

<div class="h-screen w-screen flex justify-center items-center flex-col bg-white">
    <div class="bg-gray-50 border border-gray-100 rounded-md p-6 shadow-sm">
        <h1 class="text-2xl text-black">SvelteKit + TailwindCSS Starter</h1>
        <p class="mt-2 text-gray-700">
            Every time I use one of these it always has a bunch of stuff I don't quite want.
            <br /> So I made my own and maybe someone else will want to use it one day.
        </p>
        <p class="mt-2 text-gray-500">That would be cool.</p>
    </div>
    <a
        target="_blank"
        href="https://github.com/bmkubia/sveltekit-tailwind-starter"
        class="fill-gray-600 hover:fill-gray-700 mt-2 p-2"
    >
        <GithubIcon />
    </a>
</div>

<style lang="scss">
    /* Additional styling on top of Tailwind goes here */
</style>
