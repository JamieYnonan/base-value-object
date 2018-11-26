<?php

namespace BaseValueObject\Scalar;

use Ramsey\Uuid\Uuid;
use Webmozart\Assert\Assert;

/**
 * Class BaseId
 * @package BaseValueObject\Scalar
 */
abstract class BaseId extends BaseScalar
{
    protected $value;

    /**
     * BaseId constructor.
     *
     * @param null|string $id
     */
    public function __construct(?string $id = null)
    {
        $this->setValue($id);
    }

    private function setValue(?string $id): void
    {
        if ($id === null) {
            $this->value = Uuid::uuid4()->toString();
            return;
        }

        Assert::uuid($id);
        $this->value = $id;
    }

    /**
     * {@inheritdoc}
     *
     * @return string
     */
    public function value(): string
    {
        return $this->value;
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->value();
    }
}
