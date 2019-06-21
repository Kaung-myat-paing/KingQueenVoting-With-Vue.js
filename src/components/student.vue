<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md8>
      <v-flex xs12 subheading font-weight-medium>STUDENT LIST</v-flex>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 pa-2>
          <v-text-field label="Name"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3 pa-2>
          <v-text-field label="Roll-No"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md2 d-flex pa-2>
          <v-select :items="years" label="Year"></v-select>
        </v-flex>
        <v-flex xs12 sm6 md2 d-flex pa-2>
          <v-select :items="major" label="Major"></v-select>
        </v-flex>
        <v-flex xs4 sm6 md2 pa-3>
          <v-btn fab dark small color="cyan" @click="search" v-if="!isSearch">
            <v-icon dark>search</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 mr-4>
          <v-card>
            <v-layout row wrap>
              <v-flex xs2 v-for="item in studentList" :key="item.rollno" pa-2>
                <v-btn flat @click="getStudentInfo(item.rollno)">{{ item.rollno }}</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 sm12 md4>
      <v-flex xs12 subheading font-weight-medium>ADD STUDENT</v-flex>

      <v-flex xs12 mt-5 font-weight-medium>FORM</v-flex>

      <v-layout row wrap mt-3>
        <v-flex xs12>
          <v-card>
            <v-layout row wrap>
              <v-flex pa-3>
                <v-flex xs12>
                  <v-text-field
                    name="name"
                    label="Name"
                    id="id"
                    v-model="studentInfo.name"
                    :disabled="isEdit"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    name="rollno"
                    label="Roll No"
                    id="id"
                    v-model="studentInfo.rollno"
                    :disabled="isEdit"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field name="vkey" label="VKey" id="id" disabled></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-switch label="IsVoted?" v-model="isvoted" :disabled="isEdit"></v-switch>
                </v-flex>
                <v-flex xs12 text-xs-center v-if="!studentInfo.name">
                  <v-btn round color="primary" dark>ADD STUDENT</v-btn>
                </v-flex>
                <v-flex xs12 text-xs-center v-if="isEdit">
                  <v-btn round color="green" dark @click="isEdit=false;backupData()">EDIT STUDENT</v-btn>
                  <v-btn round color="error" dark @click="isEdit=false;studentInfo={}">CLOSE</v-btn>
                </v-flex>
                <v-flex xs12 text-xs-center v-if="!isEdit && studentInfo.name">
                  <v-btn round color="error" dark @click="restoreData()">RESET STUDENT</v-btn>
                  <v-btn round color="warning" dark>UPDATE STUDENT</v-btn>
                </v-flex>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import { sampleApi } from "../services/sample-api-service";
export default {
  data: () => ({
    isvoted: false,
    studentList: [],
    isEdit: false,
    studentInfo: { rollno: "", name: "" },
    years: [
      "All",
      "First Year",
      "Second Year",
      "Third Year",
      "Fourth Year",
      "Fifth Year"
    ],
    major: ["ALL", "CS", "CT"],
    clonedData: {}
  }),
  mounted() {
    this.getStudentList();
  },
  methods: {
    getStudentList: function() {
      sampleApi.getStudentList().then(res => {
        this.studentList = res.data;
      });
    },
    getStudentInfo: function(rollno) {
      sampleApi.getStudentByRollno(rollno).then(res => {
        this.studentInfo = res.data;
        this.isEdit = true;
      });
    },
    backupData: function() {
      console.clear();
      this.clonedData = Object.assign({}, this.studentInfo);
      console.log("first clone info >>", JSON.stringify(this.clonedData));
    },
    restoreData: function() {
      console.clear();
      Object.assign(this.studentInfo, this.clonedData);
      console.log("restore student info >>", JSON.stringify(this.studentInfo));
      console.log(
        "show cloned student info >>",
        JSON.stringify(this.studentInfo)
      );
    }
  }
};
</script>
<style>
</style>


