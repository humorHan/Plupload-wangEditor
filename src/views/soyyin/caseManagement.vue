<!-- caseManagement.vue -->
<template>
    <div>
        <div id="test">
        </div>

        <div id="father">
            <div id="son">
                阿萨德
            </div>
        </div>
    </div>
</template>

<script>
    import wangEditorUtil from '../../util/util-wang-editor';
    import uploadUtil from '../../util/util-plupload';
    export default {
        name: 'CaseManagementView',
        data() {
            return {

            }
        },
        ready(){
            wangEditorUtil('test');
            uploadUtil('son', 'father');
        }
    }

</script>