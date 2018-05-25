var app = angular.module('pinyougou', []);//定义模块
app.controller('brandController', function ($scope, $http) {
    //读取列表数据绑定到表单中
    $scope.findAll = function () {
        $http.get('../brand/findAllBrand').success(
            function (response) {
                $scope.list = response;
            }
        );
    }
});