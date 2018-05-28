//服务层
app.service('brandService', function ($http) {

    //读取列表数据绑定到表单中
    this.findAll = function () {
        return $http.get('../brand/findAllBrand');
    }
    //分页
    this.findPageBrand = function (page, rows) {
        return $http.get('../brand/findPageBrand?page=' + page + '&rows=' + rows);
    }
    //查询实体
    this.findOneBrand = function (id) {
        return $http.get('../brand/findOneBrand?id=' + id);
    }

    this.create = function (entity) {
        return $http.post('../brand/createBrand', entity);
    }

    this.update = function (entity) {
        return $http.post('../brand/updateBrand', entity);
    }

    this.delete = function (ids) {
        return $http.post('../brand/deleteBrand?ids=' + ids);
    }

    this.search = function (page, rows, searchEntity) {
        return $http.post('../brand/search?page=' + page + "&rows=" + rows, searchEntity);
    }
});