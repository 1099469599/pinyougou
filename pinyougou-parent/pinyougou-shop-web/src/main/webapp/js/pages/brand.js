/**
 * 品牌加载js
 */
angular.module('pinyougou', ['pagination']).controller('brandController', function ($scope, $http) {

    //读取列表数据绑定到表单中
    $scope.findAll = function () {
        $http.get('../brand/findAllBrand').success(
            function (response) {
                $scope.list = response;
            }
        );
    }

    //重新加载列表 数据
    $scope.reloadList = function () {
        //切换页码
        //$scope.findPageBrand($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    }

    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.reloadList();//重新加载
        }
    };

    //分页
    $scope.findPageBrand = function (page, rows) {
        $http.get('../brand/findPageBrand?page=' + page + '&rows=' + rows).success(
            function (response) {
                rows = response.rows;
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;
            });
    }

    //保存
    $scope.save = function () {
        var methodName = 'createBrand';//方法名称
        //如果有ID,则执行修改方法
        if ($scope.entity.id != null) {
            methodName = 'updateBrand';//
        }
        $http.post('../brand/' + methodName, $scope.entity).success(
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

    //查询实体
    $scope.findOneBrand = function (id) {
        $http.get('../brand/findOneBrand?id=' + id).success(
            function (response) {
                $scope.entity = response;
            }
        );
    }
    //首字母输入校验，如果输入长度超过1，默认取首字母
    $scope.checkText = function () {
        if ($scope.entity.firstChar.length > 1) {
            alert("首字母过长");
            $scope.entity.firstChar = $scope.entity.firstChar.substr(0, 1);
        }
    };

    $scope.selectIds = [];//用户勾选的ID集合
    //用户勾选复选框
    $scope.updateSelection = function ($event, id) {
        if ($event.target.checked) {
            $scope.selectIds.push(id);//push向集合添加元素
        } else {
            var index = $scope.selectIds.indexOf(id);//查找值的 位置
            $scope.selectIds.splice(index, 1);//参数1：移除的位置 参数2：移除的个数
        }
    }


    //全选
    $scope.selectAll = function (checks) {
        if (checks) {
        } else {
        }
    }


    //删除
    $scope.delete = function () {
        if (confirm('确定要删除吗？')) {
            $http.get('../brand/deleteBrand?ids=' + $scope.selectIds).success(
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
        $http.post('../brand/search?page=' + page + "&rows=" + rows, $scope.searchEntity).success(
            function (response) {
                $scope.paginationConf.totalItems = response.total;//总记录数
                $scope.list = response.rows;//给列表变量赋值
            }
        );
    }

});