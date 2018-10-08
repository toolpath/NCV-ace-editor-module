<template>
<div style=" width: 80%; margin: auto;">
    <div>Plugin Module Works!</div>
    <div id="ace" style="height: 200px; width: 100%; border: solid 1px rgba(0,0,0,.3);"></div>
</div>
</template>

<script>
    export default {
        mounted() {
            const editor = ace.edit('ace');

            editor.setOptions({
                theme: 'ace/theme/chrome',
                mode: 'ace/mode/javascript',
                printMargin: false,
                vScrollBarAlwaysVisible: true,
                scrollPastEnd: 1,
                fontSize: 12,
            });

            editor.setValue(
`    export default {
        mounted() {
            const editor = ace.edit('ace');
            editor.setOptions({
                theme: 'ace/theme/chrome',
                mode: 'ace/mode/javascript',
                printMargin: false,
                vScrollBarAlwaysVisible: true,
                scrollPastEnd: 1,
                fontSize: 12,
            });
            editor.setValue(\`\`, -1);
        }
    }`, -1);
        }
    }
</script>
