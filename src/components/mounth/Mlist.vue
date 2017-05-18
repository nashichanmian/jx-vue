<template>
    <div>
        <header class="bar bar-nav">
            <div class="content">
              <div class="content-padded grid-demo">
                <div class="row no-gutter">
                  <div class="col-33" style="text-align:left">项目</div>
                  <div class="col-33">考评情况</div>
                  <div class="col-33" style="text-align:right">得分</div>
                </div>
              </div>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    .col-33{
        font-size:1.3em;
        line-height:100%;
    }
</style>