//控制层
app.controller('brandController', function ($scope, $controller, brandService) {
    // 继承
    $controller('baseController', {$scope: $scope});
    //读取列表数据绑定到表单中
    $scope.findAll = function () {
        brandService.findAll().success(
            function (response) {
                $scope.list = response;
            }
        );
    }

    //分页
    $scope.findPageBrand = function (page, rows) {
        brandService.findPageBrand(page, rows).success(
            function (response) {
                rows = response.rows;
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;
            });
    }

    //查询实体
    $scope.findOneBrand = function (id) {
        brandService.findOneBrand(id).success(
            function (response) {
                $scope.entity = response;
            }
        );
    }

    //保存
    $scope.save = function () {
        var object = null;
        //如果有ID,则执行修改方法
        if ($scope.entity.id != null) {
            object = brandService.update($scope.entity);
        } else {
            object = brandService.create($scope.entity);
        }
        object.success(
            function (response) {
                if (response.success) {
                    //重新加载
                    $scope.reloadList();
                } else {
                    alert(response.message);
                }
            }
        );
    }

    //删除
    $scope.delete = function () {
        if (confirm('确定要删除吗？')) {
            brandService.delete($scope.selectIds).success(
                function (response) {
                    if (response.success) {
                        $scope.reloadList();//刷新
                    } else {
                        alert(response.message);
                    }
                }
            );
        }
    }

    //条件查询
    $scope.searchEntity = {};//定义搜索对象
    $scope.search = function (page, rows) {
        brandService.search(page, rows, $scope.searchEntity).success(
            function (response) {
                $scope.paginationConf.totalItems = response.total;//总记录数
                $scope.list = response.rows;//给列表变量赋值
            }
        );
    }

});