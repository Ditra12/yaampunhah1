// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// Data Daerah
const daerahLabels1 = ['Kep. Seribu', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Pusat', 'Jakarta Barat', 'Jakarta Utara'];

// BAR CHART - Jumlah Guru
const barChartGuru1Options = {
  series: [{
    name: 'Jumlah Guru',
    data: [367, 258, 1148, 622, 1105, 831],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartGuru1 = new ApexCharts(document.querySelector('#bar-chart-guru1'), barChartGuru1Options);
barChartGuru1.render();

// BAR CHART - Jumlah Siswa
const barChartSiswa1Options = {
  series: [{
    name: 'Jumlah Siswa',
    data: [509, 46312, 60565, 20640, 34666, 27195],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSiswa1 = new ApexCharts(document.querySelector('#bar-chart-siswa1'), barChartSiswa1Options);
barChartSiswa1.render();

// BAR CHART - Jumlah Sekolah
const barChartSekolah1Options = {
  series: [{
    name: 'Jumlah Sekolah',
    data: [1, 104, 122, 56, 118, 91,],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSekolah1 = new ApexCharts(document.querySelector('#bar-chart-sekolah1'), barChartSekolah1Options);
barChartSekolah1.render();



// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Jumlah Siswa',
      data: [509, 46312, 60565, 20640, 34666, 27195],
    },
    {
      name: 'Jumlah Sekolah',
        data: [1, 104, 122, 56, 118, 91],
    },
    {
      name: 'Jumlah Guru',
      data: [36, 2900, 3522, 1286, 2297, 1732],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#f5b74f', '#246dec', '#cc3c43' ],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Kep. Seribu', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Pusat', 'Jakarta Barat', 'Jakarta Utara'],
  markers: {
    size: 2,
  },
  yaxis: [
    {
      title: {
        text: 'Jumlah Siswa',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Jumlah Guru',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// Data Daerah
const daerahLabels = ['Kep. Seribu', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Pusat', 'Jakarta Barat', 'Jakarta Utara'];

// PIE CHART - Jumlah Guru
const pieChartGuruOptions = {
  series: [367, 258, 1148, 622, 1105, 831],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Guru'
  }
};

const pieChartGuru = new ApexCharts(
  document.querySelector('#pie-chart-guru'),
  pieChartGuruOptions
);
pieChartGuru.render();

// PIE CHART - Jumlah Siswa
const pieChartSiswaOptions = {
  series: [509, 46312, 60565, 20640, 34666, 27195],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Siswa'
  }
};

const pieChartSiswa = new ApexCharts(
  document.querySelector('#pie-chart-Siswa'),
  pieChartSiswaOptions
);
pieChartSiswa.render();


// PIE CHART - Jumlah Sekolah
const pieChartSekolahOptions = {
  series: [18, 128, 150, 74, 96, 26],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Sekolah'
  }
};

const pieChartSekolah = new ApexCharts(
  document.querySelector('#pie-chart-sekolah'),
  pieChartSekolahOptions
);
pieChartSekolah.render();





