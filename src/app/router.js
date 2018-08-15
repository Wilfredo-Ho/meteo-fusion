
// page
import Home from '../route/Home';
import TemperatureMonth from '../route/temperature/month';
import TemperatureDay from '../route/temperature/day';
/*import Rain from '../route/rain/rain';
import Wind from '../route/wind/wind';
import Power from '../route/power/power';
import Radiation from '../route/radiation/radiation';
import ElectricityMonth from '../route/electricity/month';
import ElectricityCompare from '../route/electricity/compare';
import AirFixed from '../route/air/fixed';
import AirMove from '../route/air/move';
import AirScan from '../route/air/scan';*/

export default [
    {
        key: '1',
        icon: 'home',
        title: '首页',
        path: '/',
        component: Home
    }, {
        key: '2',
        icon: 'area-chart',
        title: '温度观测数据统计',
        path: '',
        children: [
            {
                key: '2-1',
                title: '年月温度统计',
                path: '/temperature/month',
                component: TemperatureMonth
            }, {
                key: '2-2',
                title: '年日温度统计',
                path: '/temperature/day',
                component: TemperatureDay
            }
        ]
    }
    /*, {
        key: '3',
        icon: 'line-chart',
        title: '年雨量观测数据统计',
        path: '/rain',
        component: Rain
    }, {
        key: '4',
        icon: 'cloud',
        title: '年度风观测数据统计',
        path: '/wind',
        component: Wind
    }, {
        key: '5',
        icon: 'area-chart',
        title: '分钟发电量统计',
        path: '/power',
        component: Power
    }, {
        key: '6',
        icon: 'area-chart',
        title: '净辐射统计计算',
        path: '/radiation',
        component: Radiation
    }, {
        key: '7',
        icon: 'bar-chart',
        title: '年月发电量统计',
        path: '',
        children: [
            {
                key: '7-1',
                title: '年月发电量预测统计',
                path: '/electricity/month',
                component: ElectricityMonth
            }, {
                key: '7-2',
                title: '年月发电量预测与实际发电量统计比较',
                path: '/electricity/compare',
                component: ElectricityCompare
            }
        ]
    }, {
        key: '8',
        icon: 'global',
        title: '大气气溶胶观测',
        path: '',
        children: [
            {
                key: '8-1',
                title: '激光雷达定点观测实时数据、历史数据观测',
                path: '/air/fixed',
                component: AirFixed
            }, {
                key: '8-2',
                title: '激光雷达走航观测历史数据观测',
                path: '/air/move',
                component: AirMove
            }, {
                key: '8-3',
                title: '激光雷达0-180°扫描观测历史数据观测',
                path: '/air/scan',
                component: AirScan
            }
        ]
    }*/
];