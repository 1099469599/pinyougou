package com.pinyougou.manager.controller;

import entity.PageResult;
import entity.Result;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/brand")
public class BrandController {

    @Autowired
    private BrandService brandService;

    /**
     * 查询所有brand
     *
     * @return
     */
    @RequestMapping("/findAllBrand")
    public List<TbBrand> findAllBrand() {
        List<TbBrand> brandList = brandService.findAllBrand();
        return brandList;
    }

    /**
     * 分页加载
     *
     * @param page
     * @param rows
     * @return
     */
    @RequestMapping("/findPageBrand")
    public PageResult findPageBrand(int page, int rows) {
        PageResult pageResult = brandService.findPageBrand(page, rows);
        return pageResult;
    }

    /**
     * 增加
     *
     * @param brand
     * @return
     */
    @RequestMapping("/createBrand")
    public Result createBrand(@RequestBody TbBrand brand) {
        try {
            brandService.createBrand(brand);
            return new Result(true, "增加成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false, "增加失败");
        }
    }

    /**
     * 通过ID查询返回brand
     *
     * @param id
     * @return
     */
    @RequestMapping("/findOneBrand")
    public TbBrand findBrandById(Long id) {
        TbBrand brand = brandService.findBrandById(id);
        return brand;
    }

    /**
     * 更新
     *
     * @param brand
     * @return
     */
    @RequestMapping("/updateBrand")
    public Result updateBrand(@RequestBody TbBrand brand) {
        try {
            brandService.updateBrand(brand);
            return new Result(true, "修改成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false, "修改失败");
        }
    }

    /**
     * 批量删除
     *
     * @param ids
     * @return
     */
    @RequestMapping("/deleteBrand")
    public Result delete(Long[] ids) {
        try {
            brandService.deleteBrand(ids);
            return new Result(true, "删除成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false, "删除失败");
        }
    }

    /**
     * 条件查询
     *
     * @param brand
     * @param page
     * @param rows
     * @return
     */
    @RequestMapping("/search")
    public PageResult search(@RequestBody TbBrand brand, int page, int rows) {
        return brandService.findPage(brand, page, rows);
    }

    @RequestMapping("/selectOptionList")
    public List<Map> selectOptionList() {
        return brandService.selectOptionList();
    }

}
