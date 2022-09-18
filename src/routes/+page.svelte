<script>
    const foo = "woo";
</script>

<div class="h-screen w-screen bg-gradient-to-r from-base-100 to-base-300">
    <div class="container flex flex-row mx-auto h-screen w-3/5 justify-center items-center font-mono">
        <main class="flex flex-col justify-center w-full h-2/3 gap-4"><!-- main -->
            
            <div class="flex flex-row w-full gap-4 justify-start">
                <h1 class="text-4xl font-bold leading-8 uppercase">Story<br/>Schema</h1>
                <div class="text-xs self-end">start your creative projects with the<br/>perfect mix of freedom and structure</div>
            </div>

            <div class="flex flex-row w-full h-4/5 gap-4">

                <section class="flex flex-col w-1/2 gap-4">
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">Card 1</div>
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">Card 2</div>
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">Card 3</div>
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">Card 4</div>
                </section><!-- left section -->

                <section class="relative bg-neutral text-neutral-content w-1/2 p-12 rounded">
                    <button class="absolute btn btn-sm top-2 right-2 text-xs p-2 bg-primary text-primary-content hover:text-neutral-content rounded">copy</button>
                    Copyable text
                </section><!-- right section -->
            </div>

            <button class="btn w-64 self-end bg-primary text-primary-content hover:text-neutral-content">generate</button>

        </main>
    </div>
</div>
