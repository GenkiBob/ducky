<script lang="ts">
  import { ElNotification } from 'element-plus';

  export default {
    mounted () {
      ElNotification.success({
        title: '提醒',
        message: '为了您的畅快体验，请尽量使用官方客户端，而不是第三方客户端。',
        dangerouslyUseHTMLString: true,
        offset: 100,
        duration: 20000,
      })
    }
  }
</script>