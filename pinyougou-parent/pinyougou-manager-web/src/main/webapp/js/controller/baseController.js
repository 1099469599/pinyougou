//品牌控制层
app.controller('baseController', function ($scope) {

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

    //首字母输入校验，如果输入长度超过1，默认取首字母
    $scope.checkText = function () {
        if ($scope.entity.firstChar.length > 1) {
            alert("首字母过长");
            $scope.entity.firstChar = $scope.entity.firstChar.substr(0, 1);
        }
    };

    //提取json字符串数据中某个属性，返回拼接字符串 逗号分隔
    $scope.jsonToString = function (jsonString, key) {
        var json = JSON.parse(jsonString);//将json字符串转换为json对象
        var value = "";
        for (var i = 0; i < json.length; i++) {
            if (i > 0) {
                value += ","
            }
            value += json[i][key];
        }
        return value;
    }

});