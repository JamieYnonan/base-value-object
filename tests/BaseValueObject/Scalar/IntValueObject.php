<?php

namespace BaseValueObject\Scalar;

/**
 * Class IntValueObject
 * @package BaseValueObject\Scalar
 */
class IntValueObject extends BaseInt
{
    /**
     * @param int $value
     */
    protected function setValue(int $value): void
    {
        $this->value = $value;
    }
}
