<template>
  <div class="detail card">
    <section class="bar bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="mt-4 d-flex justify-content-center">
              ข้อมูลรายชื่อสถานประกอบการโครงการสหกิจศึกษา ประจำปีการศึกษา 2564
               <div class="dropdown pl-2">
              <a
                class="btn dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                เลือกปี
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">ปีการศึกษา 2564</a>
                <a class="dropdown-item" href="#">ปีการศึกษา 2565</a>
                <a class="dropdown-item" href="#">ปีการศึกษา 2566</a>
                <a class="dropdown-item" href="#">ปีการศึกษา 2567</a>
                <a class="dropdown-item" href="#">ปีการศึกษา 2568</a>
                <a class="dropdown-item" href="#">ปีการศึกษา 2569</a>
                <a class="dropdown-item" href="#">ปีการศึกษา 2570</a>
              </div>
            </div>
            </h3>
           
            <div id="pills-tabContent" class="tab-content">
              <div class="ss">.</div>
              <div
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                class="tab-pane fade active show"
              >
                <div class="table-responsive">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th class="text-center">ลำดับ</th>
                        <th class="">ชื่อสถานประกอบการ</th>
                        <th class="">สาขาที่รับ</th>
                        <th class="">สถานที่ปฏิบัติงาน</th>
                        <th class="text-center">รายละเอียด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item of dataResource" :key="item.id">
                        <th scope="row" class="text-center">{{ item.id }}</th>
                        <td>{{ item.comp_name }}</td>
                        <td>{{ creatText(item.branch) }}</td>
                        <td>{{ item.address }}</td>
                        <td class="text-center">
                          <a :href="item.detail"
                            ><b-icon
                              icon="download"
                              variant="secondary"
                            ></b-icon
                          ></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="ls">.</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import APIService from "../../services/news-services";

const api = new APIService();
export default {
  name: "Establishment.vue",
  components: {},
  data: function () {
    return {
      dataResource: [],
      load: false,
    };
  },
  methods: {
    creatText: function (data) {
      let text = "";
      data.map((item) => {
        text = text === "" ? text + item : text + "," + item;
      });
      return text;
    },
  },
  mounted: function () {
    api.getcompany().then((response) => {
      if (response.data.data) {
        console.log(response.data.data);
        this.dataResource = response.data.data;
        this.load = true;
      }
    });
  },
};
</script>

<style>
.nav-item > a {
  color: rgb(255, 255, 255);
}
.nav-item > a:hover {
  color: rgb(255, 255, 255);
}
.bg-white {
  background: #fff !important;
}
.bar {
  padding: 60px 0;
}

.mt-4 {
  color: black;
}
.detail {
  min-height: 660px;
}
.ss {
  background-color: rgb(86, 14, 123);
  height: 10px;
}
.ls {
  background-color: rgb(86, 14, 123);
}
td {
  text-align: left;
}
.ye {
  background-color: rgb(86, 14, 123);
}
</style>
