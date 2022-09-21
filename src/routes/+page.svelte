<script>
    import { schemaData } from "../data/schemaData.js";
    import { lengthData } from "../data/lengthData.js";
    import { structureData } from "../data/structureData.js";

    function makeCombo(srcObj) {
        // create an object to return
        const comboObject = {}

        // for each key in srcObject
        for (let k in srcObj) {
            // generate a math random for each item
            const randIndex = Math.floor(srcObj[k].length * Math.random());
            // store the chosen random value in the returned object
            comboObject[k] = srcObj[k][randIndex];
        }

        const media = comboObject['media'];
        const verboseLen = comboObject['length'];

        comboObject['length'] = lengthData[media][verboseLen];

        // return an object containing one value per srcObj key
        return comboObject;
    };

    function handleClick() {
        // create the main schema object
        schema = makeCombo(schemaData);

        // grab a large block of text representing the story outline
        const outline = structureData[schema.struct];
        console.log(outline);

        // create the verbose schema text to pass to app, clipboard
        verboseSchema = `##(Your story title here)
            A ${schema.type} ${schema.media} that's ${schema.length} long
            \n
            ---\n
            ${outline}`;
    };

    function writeToClipboard() {
        navigator.clipboard.writeText(verboseSchema).then(() => {
            console.log('copied to clipboard');
            // TODO: Use this promise resolve to fire the toast success message
        }, () => {
            console.error('could not copy to clipboard');
            // TODO: Use this promise resolve to fire a toast error message
        });
    }

    $: schema = {};
    $: verboseSchema = '';

</script>

<div class="h-screen w-screen bg-gradient-to-b from-base-100 to-base-300">
    <div class="container flex flex-row mx-auto h-screen w-3/5 justify-center items-center font-mono">
        <main class="flex flex-col justify-center w-full h-2/3 gap-4"><!-- main -->
            
            <!-- App name & description-->
            <div class="flex flex-row w-full gap-4 justify-start">
                <h1 class="text-4xl font-bold leading-8 uppercase text-primary-content">Story<br/>Schema</h1>
                <div class="text-xs self-end">start your creative projects with the<br/>perfect mix of freedom and structure</div>
            </div>

            <!-- App Controls -->
            <div class="flex flex-row w-full h-4/5 gap-4">

                <!-- Schema component section-->
                <section class="flex flex-col w-1/2 gap-4">
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">{schema.type   ? schema.type   : 'Click generate...'}</div>
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">{schema.media  ? schema.media  : 'Click generate...'}</div>
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">{schema.length ? schema.length : 'Click generate...'}</div>
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">{schema.struct ? schema.struct : 'Click generate...'}</div>
                </section><!-- /Schema component section -->

                <!-- Schema outline section-->
                <section class="flex flex-col w-1/2">
                    <div class="relative bg-neutral text-neutral-content p-12 rounded text-sm font-mono h-full overflow-y-scroll">
                        <button
                            class="absolute btn btn-sm top-2 right-2 text-xs p-2 bg-primary text-primary-content hover:text-neutral-content rounded"
                            on:click={writeToClipboard}>
                            copy
                        </button>
                        {#if schema.type}

                            {@html verboseSchema.replace(/\n/gi, '<br/>')}

                        {:else}
                            Click generate to start..
                        {/if}
                    </div>
                </section><!-- /Schema outline section -->
            </div>

            <!-- App 'Generate' Button -->
            <button class="btn w-64 self-end bg-primary text-primary-content hover:text-neutral-content" on:click={handleClick}>generate</button>

        </main>
    </div>
</div>

