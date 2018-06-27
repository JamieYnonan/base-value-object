<?php

namespace BaseValueObject\Scalar;

/**
 * Class FloatValueObject
 * @package BaseValueObject\Scalar
 */
class FloatValueObject extends BaseFloat
{
    /**
     * @param float $value
     */
    protected function setValue(float $value): void
    {
        $this->value = $value;
    }
}
