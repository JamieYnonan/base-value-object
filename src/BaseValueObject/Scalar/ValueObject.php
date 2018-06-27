<?php

namespace BaseValueObject\Scalar;

/**
 * Interface ValueObject
 * @package BaseValueObject\Scalar
 */
interface ValueObject
{
    /**
     * Compare if a ValueObject is of the same type and identical value.
     *
     * @param ValueObject $valueObject
     * @return bool
     */
    public function equals(ValueObject $valueObject): bool;

    /**
     * Return the scalar value.
     */
    public function value();
}
