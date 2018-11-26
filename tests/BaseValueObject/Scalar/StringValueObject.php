<?php

namespace BaseValueObject\Scalar;

/**
 * Class StringValueObject
 * @package BaseValueObject\Scalar
 */
class StringValueObject extends BaseString
{
    /**
     * @param string $value
     */
    protected function setValue(string $value): void
    {
        $this->value = $value;
    }
}
