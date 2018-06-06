package com.pinyougou.sellergoods.service;

import entity.PageResult;
import com.pinyougou.pojo.TbBrand;

import java.util.List;
import java.util.Map;

public interface BrandService {
    /**
     * 返回所有品牌
     *
     * @return
     */
    List<TbBrand> findAllBrand();

    /**
     * 返回分页列表信息
     *
     * @param pageNum
     * @param pageSize
     * @return
     */
    PageResult findPageBrand(int pageNum, int pageSize);

    TbBrand findBrandById(Long id);

    void createBrand(TbBrand brand);

    void updateBrand(TbBrand brand);

    void deleteBrand(Long[] ids);

    PageResult findPage(TbBrand brand, int pageNum, int pageSize);

    /**
     * 品牌下拉框数据
     */
    List<Map> selectOptionList();
}
