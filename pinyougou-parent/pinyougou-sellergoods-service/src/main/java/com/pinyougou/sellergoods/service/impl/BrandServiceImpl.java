package com.pinyougou.sellergoods.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import entity.PageResult;
import com.pinyougou.mapper.TbBrandMapper;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.pojo.TbBrandExample;
import com.pinyougou.sellergoods.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandServiceImpl implements BrandService {

    @Autowired
    private TbBrandMapper brandMapper;

    @Override
    public List<TbBrand> findAllBrand() {
        TbBrandExample example = new TbBrandExample();
        List<TbBrand> brandList = brandMapper.selectByExample(example);
        return brandList;
    }

    @Override
    public PageResult findPageBrand(int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        //查询分页信息
        List<TbBrand> brandList = findAllBrand();
        //取分页信息
        PageInfo<TbBrand> pageInfo = new PageInfo<>(brandList);
        //创建返回结果对象
        PageResult pageResult = new PageResult();
        pageResult.setTotal(pageInfo.getTotal());
        pageResult.setRows(pageInfo.getList());
        return pageResult;
    }

    /**
     * 通过ID查询返回brand
     *
     * @param id
     * @return
     */
    @Override
    public TbBrand findBrandById(Long id) {
        TbBrand brand = brandMapper.selectByPrimaryKey(id);
        return brand;
    }

    /**
     * 添加brand
     *
     * @param brand
     */
    @Override
    public void createBrand(TbBrand brand) {
        brandMapper.insert(brand);
    }

    /**
     * 更新brand
     *
     * @param brand
     */
    @Override
    public void updateBrand(TbBrand brand) {
        brandMapper.updateByPrimaryKey(brand);
    }

    /**
     * 批量删除brand
     *
     * @param ids
     */
    @Override
    public void deleteBrand(Long[] ids) {
        for (Long id : ids) {
            brandMapper.deleteByPrimaryKey(id);
        }
    }

    /**
     * 条件查询
     *
     * @param brand
     * @param pageNum
     * @param pageSize
     * @return
     */
    @Override
    public PageResult findPage(TbBrand brand, int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        //添加条件查询
        TbBrandExample example = new TbBrandExample();
        TbBrandExample.Criteria criteria = example.createCriteria();
        if (brand != null) {
            if (brand.getName() != null && brand.getName().length() > 0) {
                criteria.andNameLike("%" + brand.getName() + "%");
            }
            if (brand.getFirstChar() != null && brand.getFirstChar().length() > 0) {
                criteria.andFirstCharEqualTo(brand.getFirstChar());
            }
        }
        List<TbBrand> brandList = brandMapper.selectByExample(example);
        //取分页信息
        PageInfo<TbBrand> pageInfo = new PageInfo<>(brandList);
        //创建返回结果对象
        PageResult pageResult = new PageResult();
        pageResult.setTotal(pageInfo.getTotal());
        pageResult.setRows(pageInfo.getList());
        return pageResult;
    }

}
