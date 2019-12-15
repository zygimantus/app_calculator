package com.zygimantus.app_calculator;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.hateoas.RepresentationModel;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ResultResource extends RepresentationModel {

    private Integer result;
}
