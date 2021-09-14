<template>
  <div class="flex flex-col w-full" style="height: 100%">
    
    <MysqlCommandLine v-model="sql"  />
    <MysqlToolBar class="border-b-2 p-2" />
    <div class="data flex-grow overflow-auto">
      <table>
        <thead class="header">
          <tr class="header_col border-b-2">
            <th class="tab-col border-r-2">
              <div class="col_field">
                <div class="col_name">列1</div>
                <ChevronDownIcon class="h-5" />
              </div>
            </th>
            <th class="tab-col border-r-2">
              <div class="col_field">
                <div class="col_name">列2</div>
                <ChevronDownIcon class="h-5" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
     <MysqlToolBar class="border-t-2 p-2 para_bottom_bar" />
  
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ChevronLeftIcon,ChevronRightIcon,ChevronDoubleLeftIcon,ChevronDoubleRightIcon,RefreshIcon } from "@heroicons/vue/solid";
import MysqlCommandLine from "./MysqlCommandLine.vue";
import MysqlToolBar from "./MysqlToolBar.vue"
import { mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      sql: "select * from test",
    };
  },
  components: {
    ChevronLeftIcon,
    MysqlCommandLine,
    MysqlToolBar,
    RefreshIcon,
    ChevronRightIcon,
    ChevronDoubleLeftIcon,ChevronDoubleRightIcon
  },
});
</script>

<style lang="scss" scoped>
.data {
  width: 100%;
  overflow: auto;

  td,
  th {
    white-space: nowrap;
  }
}
.sql {
  height: 150px;
}
.header_col {
  .tab-col {
    padding: 5px 5px;
    width: 200px;
    .col_field {
      display: flex;
      flex-direction: row;
      .col_name {
        flex-grow: 1;
        text-align: left;
      }
    }
  }
}

</style>
