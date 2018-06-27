<?php

namespace BaseValueObject\Scalar;

/**
 * Class BaseScalar
 * @package BaseValueObject\Scalar
 */
abstract class BaseScalar implements ValueObject
{
    /**
     * {@inheritdoc}
     */
    public function equals(ValueObject $valueObject): bool
    {
        if (!$valueObject instanceof static) {
            throw new \InvalidArgumentException(
                "You can't compare different classes."
            );
        }

        return $this->value() === $valueObject->value();
    }
}
