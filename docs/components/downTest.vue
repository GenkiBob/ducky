<script>
    import { useRouter } from 'vitepress'
    import downDomain from '../public/check/down.json'

    export default {
        data () {
            return {
                type: '',
                client: '',
                suffix: '',
                downUrl: '',
                backUrl: '',
                domain: downDomain
            }
        },
        methods: {
            getUrlKey (name) {
                return (
                    decodeURIComponent(
                        (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
                            location.href
                        ) || [, ""])[1].replace(/\+/g, "%20")
                    ) || null
                );
            },
            backHref () {
                window.open(this.backUrl)
            }
        },
        created () {
            this.type = this.getUrlKey('type');
            this.client = this.getUrlKey('client');
        },
        mounted () {
            if (this.type == 'general' || 't') {
                switch (this.client) {
                    case 'win':
                        this.suffix = '.exe';
                        break;
                    case 'apple' || 'intel':
                        this.suffix = '.pkg';
                        break;
                    case 'android':
                        this.suffix = '.apk';
                        break;
                    default:
                        break;
                }
                this.downUrl = this.domain[0] + '/client/' + this.type + '/' + this.client + this.suffix;
                this.backUrl = this.domain[1] + '/client/' + this.type + '/' + this.client + this.suffix;
                // window.location.href = this.downUrl
                console.log(this.downUrl)
            } else {
                // useRouter().go('/404')
                console.log(404)
            }
        }
    }

</script>

<template>
    <div class="holder">
        <h1>{{this.client}}</h1>
        <button @click="backHref()" class="downButton">备用下载</button>
        <h1>若浏览器未自动下载，请手动点击按钮进行下载。</h1>
    </div>
</template>

<style scoped>
    /* Presentation stuff */
    .holder {
        width: 100%;
        /* background: #efefef; */
        padding: 30px 10px;
        box-sizing: border-box;
        margin: 0 auto;
        margin-top: 20px;
        text-align: center;
    }

    h1 {
        font: 400 16px 'Open Sans';
        text-transform: uppercase;
        color: #999;
        text-shadow: 1px 1px 1px #fff;
        margin-bottom: 30px;
    }

    .downButton {
        padding: 6px 26px;
        font-size: 1rem;
        border-bottom: 2px dashed cornflowerblue;
    }
</style>