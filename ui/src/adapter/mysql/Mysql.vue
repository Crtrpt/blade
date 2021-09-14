<template>
  <div class="flex flex-col w-full" style="height: 100%">
    <MysqlCommandLine v-model="sql" />
    <MysqlToolTopBar class="border-b-2" />
    <div class="data flex-grow overflow-auto">
      <table >
        <thead class="header">
          <tr class="header_col border-b-2">
            <th
              class="tab-col border-r-2 w-6"
              @click="selectAll(!this.isSelectAll)"
            >
              <!-- <ArrowRightIcon  v-if="!isSelectAll" class="h-2" /> -->
            </th>

            <th class="tab-col border-r-2" v-for="r in row" :key="r">
              <div
                class="col_field"
                @click="selectRow(r)"
                :class="{
                  row_select: r.__selected,
                }"
                :style="{
                  width: r.width,
                }"
              >
                <div class="col_name text-sm">{{ r.name }}</div>
                <ChevronDownIcon class="h-4" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="body">
          <tr class="record" v-for="d in data" :key="d">
            <td class="select w-3" v-if="d.__selected" @click="select(d)">
              <ArrowRightIcon class="h-3" />
            </td>
            <td class="select" v-if="!d.__selected" @click="select(d)"></td>
            <td
              class="record"
              v-for="record in row"
              :key="record"
              :class="{
                row_select: record.__selected,
                col_select: d.__selected,
              }"
            >
              {{ d[record.name] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <MysqlToolBar class="border-t-2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  RefreshIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  UploadIcon
  
} from "@heroicons/vue/solid";
import MysqlCommandLine from "./MysqlCommandLine.vue";
import MysqlToolBar from "./MysqlBottomToolBar.vue";
import MysqlToolTopBar from "./MysqlTopToolBar.vue"
import { mapGetters } from "vuex";

export default defineComponent({
      components: {
    ChevronLeftIcon,
    UploadIcon,
    MysqlCommandLine,
    MysqlToolBar,
    MysqlToolTopBar,
    ArrowRightIcon,
    RefreshIcon,
    ChevronRightIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronDownIcon
  },
  methods: {
    selectAll(s) {
      this.data.forEach((e) => {
        e.__selected = s;
      });
      console.log(this.isSelectAll);
      this.isSelectAll = s;
    },
    select(d) {
      d.__selected = !d.__selected;
    },
    selectRow(d) {
      d.__selected = !d.__selected;
    },
  },
  data() {
    return {
      sql: "select * from test",
      isSelectAll: false,
      row: [
        {
          name: "id",
          __selected: false,
          width: "200px",
        },
        {
          name: "name",
          __selected: false,
          width: "200px",
        },
      ],
      data: [
        {
          __selected: false,
          id: 1,
          name:"test1",
        },
        {
          __selected: false,
          id: 2,
          name:"test2"
        },
                {
          __selected: false,
          id: 3,
          name:"test3"
        },
        {
          __selected: false,
          id: 4,
          name:"test4"
        },
        {
          __selected: false,
          id: 5,
          name:"test5"
        },
      ],
    };
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
  .header {
    .col_field {
      &.row_select {
        background-color: rgba(229, 231, 235, var(--tw-border-opacity));
      }
    }
  }
  .record {
    &.row_select  {
      background-color: rgba(229, 231, 235, var(--tw-border-opacity));
      border-top: white 1px solid;
      border-bottom: white 1px solid;
        border-left: white 1px solid;
      border-right: white 1px solid;
    }
    &.col_select {
      background-color: rgba(229, 231, 235, var(--tw-border-opacity));
      border-left: white 1px solid;
      border-right: white 1px solid;
       border-top: white 1px solid;
      border-bottom: white 1px solid;
    }
    :first-child {
      border: 1px solid rgba(229, 231, 235, var(--tw-border-opacity));
      border-left: none;
    }
    td {
      border: 1px solid rgba(229, 231, 235, var(--tw-border-opacity));
      opacity: 0.8;
      padding: 5px;
    }

    &:hover {
      background-color: rgba(229, 231, 235, var(--tw-border-opacity));
      td {
        border-left: white 1px solid;
        border-right: white 1px solid;
      }
    }
  }
}

.header_col {
  .tab-col {
    .col_field {
      padding: 5px 5px;
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
