package com.pinyougou.sellergoods.service.impl;

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

}
